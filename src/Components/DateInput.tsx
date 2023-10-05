import React from 'react'
import '../Style.css'

const generalStyle: React.CSSProperties = {
  fontSize: "1rem",
  color: "var(--color-2)",
  padding: "var(--gap-s) .75rem",
  backgroundColor: "var(--color-4)",
  borderRadius: "var(--gap)",
}

const labelStyle: React.CSSProperties = {
  display: "block",
  marginBottom: "var(--gap-s)",
  fontWeight: "600",
  ...generalStyle
};

const inputStyle: React.CSSProperties = {
  border: "none",
  fontFamily: "monospace",
  ...generalStyle
}

//usa-se o & para extender à label, que é string
type IDateInput = React.ComponentProps<"input"> & {
  label: string;
}

const DateInput = ({ label, ...props }: IDateInput) => {
  return (
    <div className="box">
      <label style={labelStyle} htmlFor={label}>{label}</label>
      <input style={inputStyle} id={label} name={label} type="date" {...props}/>
    </div>
  )
}

export default DateInput