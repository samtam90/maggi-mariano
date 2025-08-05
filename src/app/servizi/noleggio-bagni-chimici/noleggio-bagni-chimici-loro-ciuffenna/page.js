import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Loro ciuffenna",
  canonical: links.servizi["noleggio-bagni-chimici"]["loro-ciuffenna"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Loro ciuffenna",
  locationNames: { label: "Loro ciuffenna", href: "loro-ciuffenna" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
