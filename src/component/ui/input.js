export function Input({ type = "text", ...props }) {
  return (
    <input
      type={type}
      {...props}
      className={`${props.className} px-3 py-2 rounded`}
    />
  );
}
