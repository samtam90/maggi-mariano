import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto rifiuti [name]",
});
export default withBaseProps({ 
    title: "Trasporto rifiuti [name]", 
    locationNames: {label: "[name]", href: "[path]"}  
});