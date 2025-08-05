import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Bagno a Ripoli",
  canonical: links.servizi["centrifugazione-fanghi"]["bagno-a-ripoli"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Bagno a Ripoli",
  locationNames: { label: "Bagno a Ripoli", href: "bagno-a-ripoli" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
