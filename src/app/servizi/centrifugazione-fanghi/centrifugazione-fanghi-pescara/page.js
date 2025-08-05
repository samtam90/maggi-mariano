import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Pescara",
  canonical: links.servizi["centrifugazione-fanghi"]["pescara"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Pescara",
  locationNames: { label: "Pescara", href: "pescara" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["pescara"],
      name: "Pescara",
  }),
});
