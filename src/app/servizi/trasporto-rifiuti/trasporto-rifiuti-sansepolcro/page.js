import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Sansepolcro",
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Sansepolcro", 
    locationNames: {label: "Sansepolcro", href: "sansepolcro"}  
});