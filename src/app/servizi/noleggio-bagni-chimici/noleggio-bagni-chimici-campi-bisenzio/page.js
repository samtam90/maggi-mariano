import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Campi Bisenzio",
  canonical: links.servizi["noleggio-bagni-chimici"]["campi-bisenzio"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Campi Bisenzio", 
  locationNames: {label: "Campi Bisenzio", href: "campi-bisenzio"} 
});
