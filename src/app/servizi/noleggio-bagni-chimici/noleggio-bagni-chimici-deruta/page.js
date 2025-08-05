import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Deruta",
  canonical: links.servizi["noleggio-bagni-chimici"]["deruta"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Deruta",
  locationNames: { label: "Deruta", href: "deruta" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
