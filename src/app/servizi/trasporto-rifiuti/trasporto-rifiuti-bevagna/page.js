import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Bevagna",
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Bevagna", 
    locationNames: {label: "Bevagna", href: "bevagna"}  
});