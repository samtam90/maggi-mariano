import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Parma",
  canonical: links.servizi["noleggio-bagni-chimici"]["parma"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Parma",
  locationNames: { label: "Parma", href: "parma" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["parma"],
      name: "Parma",
  }),
});
