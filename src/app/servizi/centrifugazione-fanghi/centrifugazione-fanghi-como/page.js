import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Como",
  canonical: links.servizi["centrifugazione-fanghi"]["como"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Como",
  locationNames: { label: "Como", href: "como" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["como"],
      name: "Como",
  }),
});
