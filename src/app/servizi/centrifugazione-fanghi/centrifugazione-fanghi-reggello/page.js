import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Reggello",
  canonical: links.servizi["centrifugazione-fanghi"]["reggello"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Reggello",
  locationNames: { label: "Reggello", href: "reggello" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
