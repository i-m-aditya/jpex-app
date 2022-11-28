import { modalNumber, showModal } from "$lib/store";

export function closeModal() {
    showModal.set(false)
    modalNumber.set(0)
}