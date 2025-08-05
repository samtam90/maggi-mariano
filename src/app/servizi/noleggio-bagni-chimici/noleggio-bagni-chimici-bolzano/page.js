import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Bolzano",
  canonical: links.servizi["noleggio-bagni-chimici"]["bolzano"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Bolzano",
  locationNames: { label: "Bolzano", href: "bolzano" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["bolzano"],
      name: "Bolzano",
  }),
});
