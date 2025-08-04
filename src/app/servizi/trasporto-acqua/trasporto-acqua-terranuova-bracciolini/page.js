import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto acqua Terranuova Bracciolini",
});
export default withBaseProps({ 
    title: "Trasporto acqua Terranuova Bracciolini", 
    locationNames: {label: "Terranuova Bracciolini", href: "terranuova-bracciolini"}  
});