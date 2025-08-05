import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Amelia",
  canonical: links.servizi["centrifugazione-fanghi"]["amelia"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Amelia",
  locationNames: { label: "Amelia", href: "amelia" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
