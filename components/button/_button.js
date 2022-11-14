

export default function Button({ title = "" }) {
    return (
    <>
    <button>
    {title}
    {title ? " | " : ""}
    </button>
    </>
    );
   }
   