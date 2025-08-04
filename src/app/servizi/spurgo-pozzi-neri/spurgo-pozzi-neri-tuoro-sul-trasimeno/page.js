import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Tuoro sul Trasimeno",
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Tuoro sul Trasimeno", 
    locationNames: {label: "Tuoro sul Trasimeno", href: "tuoro-sul-trasimeno"}  
});