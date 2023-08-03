export interface ModalProps {
    isOpen:boolean;
    close:() => void;
    submit:() => void;
}