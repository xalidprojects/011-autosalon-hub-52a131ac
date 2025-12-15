import { useState } from 'react';
import { Header } from '@/components/Header';
import { CarForm } from '@/components/CarForm';
import { useCars } from '@/hooks/useCars';
import { Car } from '@/types/car';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Plus, Pencil, Trash2, Car as CarIcon, RotateCcw, Check } from 'lucide-react';
import { toast } from 'sonner';

export default function Admin() {
  const { cars, isLoaded, addCar, updateCar, deleteCar, resetToInitial } = useCars();
  const [editingCar, setEditingCar] = useState<Car | null>(null);
  const [showForm, setShowForm] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('az-AZ').format(price);
  };

  const handleAddCar = (data: Omit<Car, 'id' | 'createdAt'>) => {
    addCar(data);
    setShowForm(false);
    toast.success('Car added successfully');
  };

  const handleUpdateCar = (data: Omit<Car, 'id' | 'createdAt'>) => {
    if (editingCar) {
      updateCar(editingCar.id, data);
      setEditingCar(null);
      toast.success('Car updated successfully');
    }
  };

  const handleDeleteCar = (id: string) => {
    deleteCar(id);
    toast.success('Car deleted successfully');
  };

  const handleReset = () => {
    resetToInitial();
    toast.success('Data reset to initial state');
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditingCar(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container py-8">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="font-display text-3xl font-bold">Admin Panel</h1>
            <p className="mt-1 text-muted-foreground">
              Manage your car listings
            </p>
          </div>
          <div className="flex gap-3">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline" size="sm">
                  <RotateCcw className="mr-2 h-4 w-4" />
                  Reset Data
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Reset All Data?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This will restore all cars to their initial state. Any cars you've added or modified will be lost.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={handleReset}>
                    Reset Data
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
            
            {!showForm && !editingCar && (
              <Button onClick={() => setShowForm(true)}>
                <Plus className="mr-2 h-4 w-4" />
                Add Car
              </Button>
            )}
          </div>
        </div>

        {/* Form */}
        {(showForm || editingCar) && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="font-display">
                {editingCar ? 'Edit Car' : 'Add New Car'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CarForm
                car={editingCar || undefined}
                onSubmit={editingCar ? handleUpdateCar : handleAddCar}
                onCancel={handleCancel}
              />
            </CardContent>
          </Card>
        )}

        {/* Cars List */}
        <section>
          <div className="mb-4 flex items-center gap-2">
            <CarIcon className="h-5 w-5 text-muted-foreground" />
            <h2 className="font-display text-xl font-semibold">
              All Cars ({cars.length})
            </h2>
          </div>

          {!isLoaded ? (
            <div className="space-y-4">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="h-24 animate-pulse rounded-xl bg-muted" />
              ))}
            </div>
          ) : cars.length === 0 ? (
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-12">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                  <CarIcon className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="mb-2 font-display text-lg font-semibold">No Cars Yet</h3>
                <p className="mb-4 text-muted-foreground">
                  Add your first car listing to get started
                </p>
                <Button onClick={() => setShowForm(true)}>
                  <Plus className="mr-2 h-4 w-4" />
                  Add Your First Car
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-4">
              {cars.map((car) => (
                <Card key={car.id} className="overflow-hidden">
                  <div className="flex flex-col gap-4 p-4 sm:flex-row sm:items-center">
                    {/* Image */}
                    <div className="h-20 w-32 shrink-0 overflow-hidden rounded-lg bg-muted">
                      <img
                        src={car.images[0]}
                        alt={`${car.make} ${car.model}`}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    {/* Info */}
                    <div className="flex-1">
                      <h3 className="font-display font-semibold">
                        {car.make} {car.model}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {car.year} • {formatPrice(car.priceAzn)} ₼ • {car.city}
                      </p>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setEditingCar(car)}
                        disabled={!!editingCar || showForm}
                      >
                        <Pencil className="mr-1 h-4 w-4" />
                        Edit
                      </Button>
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-destructive hover:bg-destructive hover:text-destructive-foreground"
                          >
                            <Trash2 className="mr-1 h-4 w-4" />
                            Delete
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Delete Car?</AlertDialogTitle>
                            <AlertDialogDescription>
                              This will permanently delete {car.make} {car.model}. This action cannot be undone.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction
                              onClick={() => handleDeleteCar(car.id)}
                              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                            >
                              Delete
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-8">
        <div className="container text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} 011 Autosalon. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
