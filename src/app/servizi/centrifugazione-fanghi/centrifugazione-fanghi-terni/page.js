import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Terni",
  canonical: links.servizi["centrifugazione-fanghi"]["terni"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Terni",
  locationNames: { label: "Terni", href: "terni" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
