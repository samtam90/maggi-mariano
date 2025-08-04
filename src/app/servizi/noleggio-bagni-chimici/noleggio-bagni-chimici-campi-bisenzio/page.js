import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Campi Bisenzio",
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Campi Bisenzio", 
  locationNames: {label: "Campi Bisenzio", href: "campi-bisenzio"} 
});
