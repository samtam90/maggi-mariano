import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto acqua Monteleone di Spoleto",
});
export default withBaseProps({ 
    title: "Trasporto acqua Monteleone di Spoleto", 
    locationNames: {label: "Monteleone di Spoleto", href: "monteleone-di-spoleto"}  
});