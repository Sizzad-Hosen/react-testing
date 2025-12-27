type PrimaryButtonProps = {
    actionType: string
}


export const PrimaryButton = ({ actionType }: PrimaryButtonProps) => {
  return (
   <button>Clicked to {actionType}</button>
  )
}
