import { useNavigation } from "react-router-dom"
function SubmitBtn({text}) {
    const navigtion = useNavigation();
    const isSubmiting = navigtion.state == "submitting"
  return (
    <button 
    type="submit" 
    className="btn btn-primary btn-block capitalize"
    disabled={isSubmiting}>
        {isSubmiting ? (
            <> <span className="loading loading-spinner"></span>
                Sending...
            </>
        ): (
            text || "Submit"
        )}
        </button>
  )
}

export default SubmitBtn