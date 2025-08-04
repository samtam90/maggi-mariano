import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto acqua Vibo Valentia",
});
export default withBaseProps({ 
    title: "Trasporto acqua Vibo Valentia", 
    locationNames: {label: "Vibo Valentia", href: "vibo-valentia"}  
});