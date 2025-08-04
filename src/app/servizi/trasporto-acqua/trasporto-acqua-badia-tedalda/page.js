import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto acqua Badia Tedalda",
});
export default withBaseProps({ 
    title: "Trasporto acqua Badia Tedalda", 
    locationNames: {label: "Badia Tedalda", href: "badia-tedalda"}  
});