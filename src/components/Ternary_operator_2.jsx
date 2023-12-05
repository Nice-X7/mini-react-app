export const BadComponent = (props) => {            //props = true, из этого следует то что первое условие будет верным  выведет свой ответ 
    return (
        <div>
            {props ? "первый текст" : "второй текст"}
        </div>
    )
}