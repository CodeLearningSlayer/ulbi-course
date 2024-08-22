import { Mods, classNames } from "shared/lib/classNames/classNames";
import React, {
    FC,
    InputHTMLAttributes,
    memo,
    useEffect,
    useRef,
    useState,
} from "react";
import cls from "./Input.module.scss";

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "value" | "onChange" | "readOnly"
>;

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string | number;
    onChange?: (value: string) => void;
    readonly?: boolean;
}

export const Input: FC<InputProps> = memo((props) => {
    const {
        className,
        value,
        onChange,
        type = "text",
        placeholder,
        autoFocus,
        readonly,
        ...otherProps
    } = props;

    const ref = useRef<HTMLInputElement>(null);
    const [isFocused, setIsFocused] = useState(false);
    const [caretPosition, setCaretPosition] = useState(0);

    const isCaretVisible = isFocused && !readonly;

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
        setCaretPosition(e.target.value.length);
    };

    const onBlur = () => {
        setIsFocused(false);
    };

    const onFocus = () => {
        setIsFocused(true);
    };

    const onSelect = (e: any) => {
        setCaretPosition(e?.target?.selectionStart || 0);
    };

    const mods: Mods = {
        [cls.readonly]: readonly,
    };

    useEffect(() => {
        if (autoFocus) {
            setIsFocused(true);
            ref.current?.focus();
        }
    }, [autoFocus]);

    return (
        <div className={classNames(cls.InputWrapper, mods, [])}>
            {placeholder && (
                <div className={cls.placeholder}>{`${placeholder}>`}</div>
            )}
            <div className={cls.caretWrapper}>
                <input
                    type={type}
                    ref={ref}
                    className={classNames(cls.input, {}, [className])}
                    value={value}
                    onChange={onChangeHandler}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSelect={onSelect}
                    readOnly={readonly}
                    {...otherProps}
                />
                {isCaretVisible && (
                    <span
                        style={{ left: `${caretPosition * 7}px` }}
                        className={cls.caret}
                    />
                )}
            </div>
        </div>
    );
});
