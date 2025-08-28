type KeyboardProps = {
    handleBackspace: () => void;
    handleNumberClick: (value: string) => void;
    handleSubmit: () => void;
    BackspaceIcon?: React.ReactNode;
    titleBtnEnter?: string;
};
declare const Keyboard: React.FC<KeyboardProps>;

export { Keyboard };
