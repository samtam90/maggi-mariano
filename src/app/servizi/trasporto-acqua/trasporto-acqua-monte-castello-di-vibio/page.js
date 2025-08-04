import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto acqua Monte Castello di Vibio",
});
export default withBaseProps({ 
    title: "Trasporto acqua Monte Castello di Vibio", 
    locationNames: {label: "Monte Castello di Vibio", href: "monte-castello-di-vibio"}  
});