import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto acqua [name]",
});
export default withBaseProps({ 
    title: "Trasporto acqua [name]", 
    locationNames: {label: "[name]", href: "[path]"}  
});