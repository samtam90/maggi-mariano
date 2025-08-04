import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto acqua Umbertide",
});
export default withBaseProps({ 
    title: "Trasporto acqua Umbertide", 
    locationNames: {label: "Umbertide", href: "umbertide"}  
});