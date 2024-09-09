import { classNames } from "shared/lib/classNames/classNames";
import React, { useCallback } from "react";
import { Input } from "shared/ui/Input/Input";
import { useTranslation } from "react-i18next";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { useSelector } from "react-redux";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {
    DynamicModuleLoader,
    ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {
    getAddCommentFormError,
    getAddCommentFormText,
} from "../../model/selectors/addCommentFormSelectors";
import {
    addCommentActions,
    addCommentReducer,
} from "../../model/slices/addCommentFormSlice";
import cls from "./AddCommentForm.module.scss";

export interface AddCommentFormProps {
    className?: string;
    onSendComment: (text: string) => void;
}

const reducers: ReducersList = {
    addComment: addCommentReducer,
};

const AddCommentForm = ({ className, onSendComment }: AddCommentFormProps) => {
    const { t } = useTranslation();
    const text = useSelector(getAddCommentFormText);
    const error = useSelector(getAddCommentFormError);

    const dispatch = useAppDispatch();

    // Input возвращает строку
    const onCommentTextChange = useCallback(
        (value: string) => {
            dispatch(addCommentActions.setText(value));
        },
        [dispatch],
    );

    const onSendHandler = useCallback(() => {
        if (text) {
            onSendComment(text);
        }
        onCommentTextChange("");
    }, [onCommentTextChange, onSendComment, text]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.AddCommentForm, {}, [className])}>
                <Input
                    className={cls.input}
                    placeholder={t("Введите текст комментария")}
                    value={text}
                    onChange={onCommentTextChange}
                />
                <Button theme={ThemeButton.OUTLINE} onClick={onSendHandler}>
                    {t("Отправить")}
                </Button>
            </div>
        </DynamicModuleLoader>
    );
};

export default AddCommentForm;
