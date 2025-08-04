import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Scheggino",
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Scheggino", 
    locationNames: {label: "Scheggino", href: "scheggino"}  
});