import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto acqua Montespertoli",
});
export default withBaseProps({ 
    title: "Trasporto acqua Montespertoli", 
    locationNames: {label: "Montespertoli", href: "montespertoli"}  
});