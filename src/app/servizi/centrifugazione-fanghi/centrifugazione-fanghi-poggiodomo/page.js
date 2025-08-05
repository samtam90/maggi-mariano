import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Poggiodomo",
  canonical: links.servizi["centrifugazione-fanghi"]["poggiodomo"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Poggiodomo",
  locationNames: { label: "Poggiodomo", href: "poggiodomo" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
