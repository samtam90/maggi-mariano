import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto acqua Padova",
});
export default withBaseProps({ 
    title: "Trasporto acqua Padova", 
    locationNames: {label: "Padova", href: "padova"}  
});