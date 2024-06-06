export const StyledJsx = () => {
  return (
    <>
      <div className="container">
        <p className="title">StyledJsx</p>
        <button className="button">ボタン</button>
      </div>
      <style jsx="true">{`
        .container {
          border: solid 1px tomato;
          border-radius: 20px;
          padding: 10px;
          margin: 10px;
          display: flex;
          gap: 10px;
        }
        .title {
          margin: 0;
        }

        .button {
          background: tomato;
          color: #fff;

          &:hover {
            background: #ff6347;
          }
        }
      `}</style>
    </>
  )
}
