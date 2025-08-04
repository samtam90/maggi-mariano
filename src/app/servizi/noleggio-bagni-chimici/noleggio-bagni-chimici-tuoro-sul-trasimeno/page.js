import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Tuoro sul Trasimeno",
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Tuoro sul Trasimeno", 
  locationNames: {label: "Tuoro sul Trasimeno", href: "tuoro-sul-trasimeno"} 
});
