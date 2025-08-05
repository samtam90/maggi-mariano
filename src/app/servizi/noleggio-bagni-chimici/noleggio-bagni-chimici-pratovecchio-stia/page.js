import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Pratovecchio Stia",
  canonical: links.servizi["noleggio-bagni-chimici"]["pratovecchio-stia"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Pratovecchio Stia",
  locationNames: { label: "Pratovecchio Stia", href: "pratovecchio-stia" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
