import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Monte Castello di Vibio",
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Monte Castello di Vibio", 
    locationNames: {label: "Monte Castello di Vibio", href: "monte-castello-di-vibio"}  
});