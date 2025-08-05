import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Otricoli",
  canonical: links.servizi["centrifugazione-fanghi"]["otricoli"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Otricoli",
  locationNames: { label: "Otricoli", href: "otricoli" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
