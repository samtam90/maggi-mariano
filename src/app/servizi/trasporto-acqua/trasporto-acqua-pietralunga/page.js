import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto acqua Pietralunga",
});
export default withBaseProps({ 
    title: "Trasporto acqua Pietralunga", 
    locationNames: {label: "Pietralunga", href: "pietralunga"}  
});