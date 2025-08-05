import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Oristano",
  canonical: links.servizi["centrifugazione-fanghi"]["oristano"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Oristano",
  locationNames: { label: "Oristano", href: "oristano" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["oristano"],
      name: "Oristano",
  }),
});
