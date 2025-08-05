import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Porano",
  canonical: links.servizi["centrifugazione-fanghi"]["porano"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Porano",
  locationNames: { label: "Porano", href: "porano" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
