import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Padova",
  canonical: links.servizi["centrifugazione-fanghi"]["padova"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Padova",
  locationNames: { label: "Padova", href: "padova" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["padova"],
      name: "Padova",
  }),
});
