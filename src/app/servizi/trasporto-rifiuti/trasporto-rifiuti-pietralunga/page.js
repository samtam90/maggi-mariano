import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Pietralunga",
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Pietralunga", 
    locationNames: {label: "Pietralunga", href: "pietralunga"}  
});