function MyButton(props) {
    const handleDelete = (id, event) => {
        console.log(id, event.target);
    }; // ← 괄호 및 세미콜론 수정

    return (
        <button onClick={(event) => handleDelete(1, event)}>
            삭제하기
        </button>
    );
}
export default MyButton;
