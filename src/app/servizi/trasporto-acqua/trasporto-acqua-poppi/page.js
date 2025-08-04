import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto acqua Poppi",
});
export default withBaseProps({ 
    title: "Trasporto acqua Poppi", 
    locationNames: {label: "Poppi", href: "poppi"}  
});