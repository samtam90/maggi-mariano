import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto acqua Fossato di Vico",
});
export default withBaseProps({ 
    title: "Trasporto acqua Fossato di Vico", 
    locationNames: {label: "Fossato di Vico", href: "fossato-di-vico"}  
});