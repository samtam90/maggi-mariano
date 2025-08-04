import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Sesto Fiorentino",
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Sesto Fiorentino", 
  locationNames: {label: "Sesto Fiorentino", href: "sesto-fiorentino"} 
});
