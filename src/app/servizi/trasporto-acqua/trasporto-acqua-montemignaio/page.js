import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto acqua Montemignaio",
});
export default withBaseProps({ 
    title: "Trasporto acqua Montemignaio", 
    locationNames: {label: "Montemignaio", href: "montemignaio"}  
});